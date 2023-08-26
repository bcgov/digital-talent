export default function OurNumbers() {
  return (
    <div className="relative flex w-screen bg-custom-gold-50 py-16" style={{ marginLeft: 'calc(50% - 50vw)' }}>
      <div className="container mx-auto flex flex-auto flex-wrap">
        <div className="w-full text-4xl font-bold">Our numbers</div>
        <div className="w-full mb-8">From our work across Provincial Government from November 2021 – December 2022</div>
        <div className="sm:w-1/2 w-80 gap-y-4 mb-2 border-custom-yellow sm:border-r max-sm:border-b">
          <ul className="list-none  ml-8 pl-0">
            <li className="flex items-center space-x-4 pl-0">
              <div className="w-12">
                <div className="w-12 h-12 bg-custom-yellow rounded-full flex items-center justify-center font-bold mx-auto">
                  584
                </div>
              </div>
              <div className="text-lg font-bold">Total Applicants</div>
            </li>
            <li className="flex items-center space-x-4 pl-0">
              <div className="w-12">
                <div className="w-8 h-8 bg-custom-yellow rounded-full flex items-center justify-center font-bold mx-auto">
                  490
                </div>
              </div>
              <div>
                <b>External</b> to B.C. Government
              </div>
            </li>
            <li className="flex items-center space-x-4 pl-0">
              <div className="w-12">
                <div className="w-8 h-8 bg-custom-yellow rounded-full flex items-center justify-center font-bold mx-auto">
                  94
                </div>
              </div>
              <div>
                <b>Internal</b> to B.C. Government
              </div>
            </li>
          </ul>
        </div>
        <div className="sm:w-1/2 w-full text-lg font-bold">
          <ul className="list-none  ml-8  pl-0">
            {/* <ul className="list-none mx-auto max-w-screen-xl"> */}
            <li className="flex items-center space-x-4 pl-0">
              <div className="w-12 h-12 bg-custom-yellow rounded-full flex items-center justify-center font-bold">
                16
              </div>
              <div>Completed competitions </div>
            </li>
            <li className="flex items-center space-x-4 pl-0">
              <div className="w-12 h-12 bg-custom-yellow rounded-full flex items-center justify-center font-bold">
                175
              </div>
              <div>Interviewed candidates</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
