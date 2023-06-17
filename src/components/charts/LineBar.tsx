const LineBar = ({ data }: any) => {
  return (
    <div className="flex px-5 items-center">
      <div className="h-2 w-3/4	bg-homeMain mr-4"></div>
      <div className="text-gray-300">{ data }</div>
    </div>
  )
}
export default LineBar;