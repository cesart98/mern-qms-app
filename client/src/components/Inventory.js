import { Routes, Route, useNavigate, useParams } from "react-router-dom";


function InventoryNavCards() {
  const navigate = useNavigate();
  return (
    <div className='grid gap-2 grid-cols-3 grid-rows-2 place-content-stretch'>
      <div>
        <h5>List all batches</h5>
        <button className='bg-blue-500 px-2 rounded text-white' onClick={(e) => navigate('batches')}>Go</button>
      </div>
      <div>
        <h5>Search by batch number</h5>
        <div className="flex flex-nowrap">
        <label>
          Batch #: <input type='text' />
        </label>

        </div>
        <button className='bg-blue-500 px-2 text-white rounded'>Search</button>
      </div>
    </div>
  );
}

function BatchTable(props) {
  const tableHeadings = props.headers.map((content) => 
    <th key={content} className='text-center border border-solid border-black'>
      {content}
    </th>
  );
  
  const tableDataRows = props.rows.map((content) => 
    <tr key={content}>
      {content.map(content => <td key={content} className='text-center border border-solid border-black'>{content}</td>)}
    </tr>
  );  

  return (
    <div className='overflow-scroll'>
      <table className='border-collapse bg-white table-fixed overflow-scroll'>
        <thead>
          <tr>{tableHeadings}</tr>
        </thead>
        <tbody className='text-center'>
          {tableDataRows}
        </tbody>
      </table>
    </div>
  );
}

function BatchInfoPage(props) {
  let params = useParams();
  let batch = props.batches.find(batch => batch._id === params.batchId);
  return (
    <div>
      <h1>{`Batch: ${batch.id}`}</h1>
      <p>{`Material: ${batch.material_id}`}</p>
    </div>
  );
}

export default function Inventory(props) {

  //const batchesDeepCopy = JSON.parse(JSON.stringify(props.batches));
  //const headerContent = Object.keys(batchesDeepCopy[0]);
  //const bodyContent = batchesDeepCopy.map(data => Object.values(data));
  
  return (
      <Routes>
        <Route path='/' element={<div>inventory</div>} />
        <Route path='batches'>
            <Route index element={<div>batch table</div>}/>
            <Route path=':batchId' element={<div>batch info</div>} />
        </Route>
      </Routes>
  );
}