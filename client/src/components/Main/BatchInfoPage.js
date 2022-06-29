import { useParams } from "react-router-dom";

export default function BatchInfoPage(props) {
  let params = useParams();
  let batch = props.batches.find(batch => batch._id === params.batchId);
  return (
    <div>
      <h1>{`Batch: ${batch.id}`}</h1>
      <p>{`Material: ${batch.material_id}`}</p>
    </div>
  );
}
