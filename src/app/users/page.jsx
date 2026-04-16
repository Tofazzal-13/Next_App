import Link from "next/link";


const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json()
    return (
        <div className="my-6">
            <h2 className="mb-5">Users are coming here</h2>
            <div className="grid grid-cols-3 gap-5 ">
                {
                    users.map((user) => <div key={user.id} className="card bg-neutral text-neutral-content border ">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{user.name}</h2>
                            <p>We are using cookies for no reason.</p>
                            <div className="card-actions justify-end">
                                <Link href={`/users/${user.id}`}>View Details</Link>
                                
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UsersPage;