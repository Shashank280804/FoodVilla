const Contacts = () => {
    return ( 
        <div className="">
            <h2 className="font-bold text-3xl p-4 m-4">Contacts Us</h2>
            <form>
                <input type="text" 
                className="border border-black p-2 m-2" 
                placeholder="Name"/>
                <input type="text" 
                className="border border-black p-2 m-2" 
                placeholder="Message"/>

                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg font-bold">Submit</button>
            </form>
        </div>
    )
}

export default Contacts;