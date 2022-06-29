export default function Card(props) {
  return (
    <div className='border-black bg-white border-2 flex flex-col justify-center items-center text-center py-14 px-2'>
      {props.children}
    </div>
  );
}