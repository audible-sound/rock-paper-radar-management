import React from 'react'

const DetailedTableModal = ({ isOpen, onClose, data, type }) => {
    if (!isOpen) return null;

    const getTitle = () => {
        switch(type) {
            case 'total': return 'Total Users';
            case 'active': return 'Active Users';
            case 'created': return 'Created Accounts';
            case 'posts': return 'Total Posts';
            case 'banned': return 'Banned Users';
            default: return '';
        }
    }

    const renderTableContent = () => {
        if (type === 'total') {
            return (
                <div className="max-h-96 overflow-y-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Profile Picture</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Joined At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td><img src={user.profilePictureUrl || user.UserProfile?.profilePictureUrl} alt="Profile" className="w-10 h-10 rounded-full"/></td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        } else if (['active', 'banned'].includes(type)) {
            const users = Array.isArray(data) ? data.flatMap(item => item.users || []) : (data.users || []);
            return (
                <div className="max-h-96 overflow-y-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Profile Picture</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Account Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td><img src={user.profilePictureUrl} alt="Profile" className="w-10 h-10 rounded-full"/></td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.birthDate ? new Date(user.birthDate).toLocaleDateString() : 'N/A'}</td>
                                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        } else if (type === 'created') {
            return (
                <div className="max-h-96 overflow-y-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Profile Picture</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Account Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td><img src={user.profilePicture} alt="Profile" className="w-10 h-10 rounded-full"/></td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.birthDate ? new Date(user.birthDate).toLocaleDateString() : 'N/A'}</td>
                                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        } else if (type === 'posts') {
            return (
                <div className="max-h-96 overflow-y-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Post Title</th>
                                <th>Author</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.postTitle}</td>
                                    <td>{item.username}</td>
                                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return (
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) && data.map((item, index) => (
                            <tr key={index}>
                                <td>{new Date(item.month || item.year || item.createdAt).toLocaleDateString()}</td>
                                <td>{item.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-3/4 max-h-3/4 overflow-auto">
                <h2 className="text-2xl font-bold mb-4">{getTitle()}</h2>
                {renderTableContent()}
                <button 
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default DetailedTableModal