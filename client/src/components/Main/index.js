import { Routes, Route } from "react-router-dom";
import BatchTable from "./BatchTable.js";
import BatchInfoPage from "./BatchInfoPage.js";
import InventoryNavCards from "./InventoryNavCards.js";


export default function Main(props) {

  const batchesDeepCopy = JSON.parse(JSON.stringify(props.batches));
  const headerContent = Object.keys(batchesDeepCopy[0]);
  const bodyContent = batchesDeepCopy.map(data => Object.values(data));
  
  return (
    
    <main className="bg-gray-300 px-4 py-4 h-full flex-grow w-screen">
      <Routes>
        <Route path='inventory'>
          <Route index element={<InventoryNavCards />}/>
          <Route path='batches'>
            <Route index element={<BatchTable headers={headerContent} rows={bodyContent}/>}/>
            <Route path=':batchId' element={<BatchInfoPage batches={batchesDeepCopy}/>} />
          </Route>
        </Route>
      </Routes>

    </main>
  );
}