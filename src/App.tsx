import React from 'react';
import logo from './logo.svg';
import './App.css';

const styles = {
  container:{
    padding: 20,
  },
  fileContainer: {
    padding: 20,
  }
}
function App() {

  const getFiles = (event:any) => {
    let files = event.target.files;
    let listing = document.getElementById("listing");
    for (let i = 0; i < files.length; ++i) {
      let item = document.createElement("li");
      item.innerHTML = files[i].webkitRelativePath;
      listing?.appendChild(item);
    }
  };
  return (
    <div className="App">
      <div style={styles.container}>
       <input
        multiple
        /* @ts-expect-error */
        directory="" 
        webkitdirectory=""
        type="file"
        onChange={(event) => {
          getFiles(event);
        }}
      />
      <div style={styles.fileContainer} id="listing" ></div>
      </div>
    </div>
  );
}

export default App;
