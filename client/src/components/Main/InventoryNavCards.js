import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function InventoryNavCards() {
  const navigate = useNavigate();
  return (
    <div className='grid gap-2 grid-cols-3 grid-rows-2 place-content-stretch'>
      <Card>
        <h5>List all batches</h5>
        <button className='bg-blue-500 px-2 rounded text-white' onClick={(e) => navigate('batches')}>Go</button>
      </Card>
      <Card>
        <h5>Search by batch number</h5>
        <div className="flex flex-nowrap">
        <label>
          Batch #: <input type='text' />
        </label>

        </div>
        <button className='bg-blue-500 px-2 text-white rounded'>Search</button>
      </Card>
    </div>
  );
}
