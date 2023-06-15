const Information = () => {
  return (
    <div className="grid gap-5 outline outline-1 outline-red-200 my-20">
      <div className="grid gap-5 mx-16 my-8 text-center leading-loose outline outline-1 outline-red-200">
        <h1 className="text-[#242d52] text-4xl font-bold">
          What's different about Manage?
        </h1>
        <p className="text-[#9095a7]">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          team.
        </p>
      </div>
      <div className="ml-6 flex flex-col gap-3 outline outline-1 outline-red-200">
        <header className="flex gap-2 items-center text-xl text-[#242d52] bg-[#ffefeb] rounded-l-full">
          <span className="bg-[#f25f3a] py-1 px-6 border-solid rounded-full text-[#fafafa] outline outline-1 outline-red-200">
            01
          </span>
          <span className="">Track company-wide progress</span>
        </header>
        <p className="text-[#9095a7] font-thin leading-loose mr-2 outline outline-1 outline-red-200">
          See how your day-to-day fit into the wider vision. Go from tracking
          progress at the milestone level all the way down to the smallest
          details. Never lose sight of the bigger picture.
        </p>
      </div>
      <div className="ml-6 flex flex-col gap-3">
        <header className="flex gap-2 items-center text-xl text-[#242d52] bg-[#ffefeb] rounded-l-full">
          <span className="bg-[#f25f3a] py-1 px-6 border-solid rounded-full text-[#fafafa]">
            02
          </span>
          <span className="">Advanced built-in reports</span>
        </header>
        <p className="text-[#9095a7] font-thin leading-loose mr-2 outline outline-1 outline-red-200">
          Set internal delivery estimates and track progress toward company
          goals. Our customizable dashboard helps you build out the reports you
          need to keep stakeholders informed.
        </p>
      </div>
      <div className="ml-6 flex flex-col gap-3">
        <header className="flex gap-2 items-center text-xl  text-[#242d52] bg-[#ffefeb] rounded-l-full">
          <span className="bg-[#f25f3a] py-1 px-6 border-solid rounded-full text-[#fafafa]">
            03
          </span>
          <span className="">Everything you need in one place</span>
        </header>
        <p className="text-[#9095a7] font-thin leading-loose mr-2 outline outline-1 outline-red-200">
          Stop jumping from one service to another to communicate, store files,
          track tasks and share documents. Manage offers an all-in-one team
          productivity solution.
        </p>
      </div>
    </div>
  );
};

export default Information;
