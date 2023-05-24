export default function Tweet() {
  return (
    <div className="flex items-center justify-center gap-x-3 px-4">
      <div className="h-12 w-12 rounded-full bg-blue-500 text-blue-500">.</div>
      <div className="block w-10/12 resize-none rounded-lg p-2.5 text-sm text-gray-900 ">
        <p>This is where the tweet text will go</p>
      </div>
    </div>
  );
}
