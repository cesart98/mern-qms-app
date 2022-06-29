export default function BatchTable(props) {
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
