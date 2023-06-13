import * as React from 'react';
import { ViewState, EditingState} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Resources,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  DayView,
  WeekView,
  MonthView,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
  Toolbar, 
  DateNavigator,
  TodayButton,
  ViewSwitcher,
  DragDropProvider
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments, projects, priorities } from './appointments';
import dayjs  from 'dayjs';

const TimeTableCellDay = ({ onDoubleClick, ...restProps }) => {
  return <DayView.TimeTableCell onClick={onDoubleClick} {...restProps} />;
};

const TimeTableCellWeek = ({ onDoubleClick, ...restProps }) => {
  return <WeekView.TimeTableCell onClick={onDoubleClick} {...restProps} />;
};

const TimeTableCellMonth = ({ onDoubleClick, ...restProps }) => {
  return <MonthView.TimeTableCell onClick={onDoubleClick} {...restProps} />;
};

const allDayLocalizationMessages = {
  'es-ES': {
    allDay: 'Todo el día',
  },
};
const getAllDayMessages = locale => allDayLocalizationMessages[locale];

const toDayLocalizationMessages = {
  'es-ES': {
    today: 'Hoy',
  },
};
const getToDayMessages = locale => toDayLocalizationMessages[locale];

const appoinmentFormLocalizationMessages = {
  'es-ES': {
    commitCommand: 'Guardar',
    detailsLabel: 'Detalles',
    titleLabel: 'Título',
    moreInformationLabel: 'Información Adicional',
    allDayLabel: 'Todo el día',
    repeatLabel: 'Repetir',
    notesLabel: 'Notas',
    never: 'Nunca',
    daily: 'Diariamente',
    weekly:'Semanalmente',
    monthly: 'Mensualmente',
    yearly: 'Anualmente',
    repeatEveryLabel: 'Repetir cada',
    daysLabel: 'día(s)',
    endRepeatLabel: 'Finalizar repetición',
    onLabel: 'A la(s)',
    occurrencesLabel: 'Ocurrencia(s)',
    afterLabel: 'Luego de',
  },
};
const getAppoinmentFormMessages = locale => appoinmentFormLocalizationMessages[locale];

const confirmationDialogLocalizationMessages = {
  'es-ES': {
    discardButton: 'Descartar',
    deleteButton: 'Borrar',
    cancelButton: 'Cancelar',
    confirmDeleteMessage: '¿Está seguro de eliminar este evento?',
    confirmCancelMessage: '¿Descartar cambios?',
  },
};
const getConfirmationDialogMessages = locale => confirmationDialogLocalizationMessages[locale];

const editRecurrenceLocalizationMessages = {
  'es-ES': {
    current: 'Este evento',
    currentAndFollowing: 'Este y los siguientes eventos',
    all: 'Todos los eventos',
    menuEditingTitle: 'Editar evento recurrente',
    menuDeletingTitle: 'Eliminar evento recurrente',
    cancelButton: 'Cancelar',
    commitButton: 'Aceptar',
  },
};
const getEditRecurrenceMessages = locale => editRecurrenceLocalizationMessages[locale];

export default class DashBoardCalendar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      currentDate: dayjs(Date.now()),
      locale: 'es-ES',
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined, 
      resources:[
        {
          fieldName: 'priorities',
          title: 'Prioridades',
          instances: priorities,
        },
        {
          fieldName: 'projects',
          title: 'Proyectos',
          instances: projects,
        },
      ]
    };

    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
  }

  changeAddedAppointment(addedAppointment) {
    this.setState({ addedAppointment });
  }

  changeAppointmentChanges(appointmentChanges) {
    this.setState({ appointmentChanges });
  }

  changeEditingAppointment(editingAppointment) {
    this.setState({ editingAppointment });
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const {
      currentDate, data, resources, addedAppointment, appointmentChanges, editingAppointment, locale } = this.state;
    return (
        <Scheduler
          data={data}
          height={'460'}
          locale={locale}
        >
          <ViewState
            defaultCurrentDate={currentDate}
          />
          <EditingState
            onCommitChanges={this.commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={this.changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={this.changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={this.changeEditingAppointment}
          />
          <WeekView
            name='Semana'
            startDayHour={8}
            endDayHour={17}
            timeTableCellComponent={TimeTableCellWeek}
          />
           <DayView 
            name='Día'
            startDayHour={8}
            endDayHour={17}
            timeTableCellComponent={TimeTableCellDay}
          />
          <MonthView 
          name='Mes'
          timeTableCellComponent={TimeTableCellMonth}/>
          <Toolbar />
          <ViewSwitcher />
          <DateNavigator />
          <TodayButton messages={getToDayMessages(locale)}/>
          <AllDayPanel  messages={getAllDayMessages(locale)}/>
          <EditRecurrenceMenu messages={getEditRecurrenceMessages(locale)}/>
          <ConfirmationDialog messages={getConfirmationDialogMessages(locale)}/>
          <Appointments />
          <Resources
          data={resources}
          mainResourceName="priorities"
          />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
            showCloseButton
          />
          <DragDropProvider />
          <AppointmentForm  messages={getAppoinmentFormMessages(locale)} readOnly/>
        </Scheduler>
    );
  }
}