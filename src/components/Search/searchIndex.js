import React from 'react';
import MiniSearch from "minisearch";
import { mockData } from "./mockData";
import clienteAxios from '../../config/clienteAxios';


const [data, setData]= React.useState([]);
const voluntariosO = async ()=> {
    

   

  try {
    
    const { data1 } = await clienteAxios.get('/beneficiarios/')
    .then(function (response) {
     // setAlerta({})
     
     setData(response.data);
   
     return
    })
    .catch(function (error) {
    
      
    
      console.log('error')
     return
    });
  
    
    
    
} catch (error) {
    return
}

};
voluntariosO() ;

const searchIndex = new MiniSearch({
  // fields to index for full-text search
  fields: [ "cedula", "nombre_rep", "nombre"],
  // fields to return with search results
  storeFields: [ "cedula","nombre_rep", "nombre"],
  searchOptions: {
    // Set weights of the fields in your data
    boost: { title: 2, description: 1 },
    // Prefix search (so that 'moto' will match 'motorcycle')
    prefix: true,
    // Higher number === terms can be less accurate
    fuzzy: 0.25,
  },
  // idField: "someOtherUniqueField",
});

//searchIndex.addAll(data)
// searchIndex.add();
 searchIndex.addAllAsync(data);

let searchResults = searchIndex.search("dogge", {
  //   filter: (result) => result.tags.includes("Peanut Butter"),
});

console.log(searchResults);

/**
 * Other operations
 */
// searchIndex.documentCount;
// searchIndex.remove(document);

// autoSuggest takes the same options as .search,
// but instead of returning results, returns
// suggested queries based on the given input.
// This is what you'd want to use for something
// like an autocomplete drop down.
const suggestions = searchIndex.autoSuggest("pup");

console.log(suggestions);
