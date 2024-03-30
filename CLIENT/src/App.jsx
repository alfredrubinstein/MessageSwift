import Badge from "./components/GeneralContainer/MiniComponents/Badge";
// import GeneralContainer from './components/GeneralContainer/index'


export default function App() {
  return (
    <div >
      {/* <GeneralContainer/> */}
      <div style={{ display: 'flex' , padding: '8px', width: '800px'}}>
        <img src="./vite.svg" alt="" />
        <div style={{background: 'green', flexGrow: 1}} >
          <h3>Jessica Koel</h3>
          <p>hey jhon...</p>
        </div>
        <div style={{ background: 'red'  }} >
          <time>11:34</time>
          <Badge>45</Badge>
        </div>
      </div>
    </div>
  )
}
