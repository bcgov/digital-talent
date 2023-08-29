export default function OurNumbers() {
  return (
    <div className="relative flex w-screen bg-custom-gold-50 py-16 m-8" style={{ marginLeft: 'calc(50% - 50vw)' }}>
      <div className="container mx-auto flex flex-auto flex-wrap">
        <div className="w-full text-4xl font-bold">Our numbers</div>
        <div className="w-full mb-8 mt-2">
          From our work across Provincial Government from November 2021 – December 2022
        </div>
        <div className=" flex-grow sm:w-1/2 w-80 gap-y-4 mb-2 border-custom-yellow sm:border-r max-sm:border-b">
          <ul className="list-none  ml-8 pl-0">
            <li className="flex items-center space-x-4 pl-0 ">
              <div className="w-12 mr-3 mb-2">
                <div className="w-12 h-12 bg-custom-yellow rounded-full flex items-center justify-center font-bold mx-auto p-8">
                  584
                </div>
              </div>
              <div className="text-lg font-bold mb-2">Total Applicants</div>
            </li>
            <li className="flex items-center space-x-4 pl-0">
              <div className="w-12 ml-2 mb-2">
                <div className="w-8 h-8 bg-custom-yellow rounded-full flex items-center justify-center font-bold mx-auto p-5">
                  490
                </div>
              </div>
              <div className="mb-2">
                <b>External</b> to B.C. Government
              </div>
            </li>
            <li className="flex items-center space-x-4 pl-0">
              <div className="w-12 ml-2 mb-2">
                <div className="w-8 h-8 bg-custom-yellow rounded-full flex items-center justify-center font-bold mx-auto p-5">
                  94
                </div>
              </div>
              <div className="mb-2">
                <b>Internal</b> to B.C. Government
              </div>
            </li>
          </ul>
        </div>
        <div className="sm:w-1/2 w-full text-lg font-bold">
          <ul className="list-none  ml-8  pl-0">
            {/* <ul className="list-none mx-auto max-w-screen-xl"> */}
            <li className="flex items-center space-x-4 pl-0">
              <div className="sm:mb-6 mb-4">
                <div className="w-12 h-12 bg-custom-yellow rounded-full flex items-center justify-center font-bold p-8">
                  175
                </div>
              </div>
              <div className="sm:mb-6 mb-4">Interviewed candidates</div>
            </li>
            <li className="flex items-center space-x-4 pl-0">
              <div className="w-12 h-12 bg-custom-yellow rounded-full flex items-center justify-center font-bold p-8">
                16
              </div>
              <div>Completed competitions </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
