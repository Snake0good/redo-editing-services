function Home() {
  return (
    <div className="flex flex-col justify-center place-items-around text-center space-y-3">
        <h1 className="text-5xl">Love Your Home</h1>
        <h1>Welcome Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quo voluptatum, nulla reprehenderit, minus cumque, ut eum temporibus fugit dignissimos itaque dicta corporis tenetur animi excepturi natus velit amet veritatis.</h1>
        <img src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="unsplash" />

        <div className="space-x-5">
            <button className="w-44 bg-pink-500 rounded-3xl py-3 px-5 text-pink-100 font-bold">
                SignUp
            </button>

            <button className="w-44 bg-teal-300 rounded-3xl py-3 px-5 text-teal-900 font-bold">
                Login
            </button>
        </div>
    </div>
  )
}
export default Home