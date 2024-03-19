import './App.css';
import axios from 'axios';

function App() {

const download = () => {
  
  axios.get('https://paperplanemaj.s3.ca-central-1.amazonaws.com/video31.mp4', {
    responseType: 'blob',
    onDownloadProgress: function(ProgressEvent) {
      document.getElementById("progress").innerHTML = (Math.floor(ProgressEvent.progress*100)+"%")
    }
  })
  .then((obj) => {
    console.log(obj.data)
    const url = URL.createObjectURL(obj.data);
    const a = document.createElement('a');
    a.href = url;
    a.download = "video31.mp4";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  })
  .catch(err => console.error(err))
}

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => download()}>Download</button>
        <p id="progress">0%</p>
      </header>
    </div>
  );
}

export default App;


//https://paperplanemaj.s3.ca-central-1.amazonaws.com/SUP.pdf