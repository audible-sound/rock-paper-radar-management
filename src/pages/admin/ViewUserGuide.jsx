import { useState, useEffect, useCallback } from "react";
import Header from "../../components/layouts/Header";
import AdminLayout from "../../components/layouts/AdminLayout";
import UserGuide from "../../components/ui/UserGuide";
import UserGuideContent from "../../components/ui/UserGuideContent";
import PlusSign from "../../assets/icons/plusSign.svg";
import { Link } from "react-router-dom";
import mainAxios from "../../api/mainAxios";
import Cookies from "js-cookie";

const ViewUserGuide = () => {
    const [selectedContent, setSelectedContent] = useState([]);
    const [guideType, setGuideType] = useState("user");

    const fetchUserGuides = useCallback(async () => {
        try {
            const response = await mainAxios.get('/userguide/', {
                headers: {
                    authorization: Cookies.get('token')
                }
            });
            const filteredData = response.data.data.filter(item => item.forUserType === guideType);
            setSelectedContent(filteredData);
        } catch (error) {
            console.error('Error fetching user guides:', error);
        }
    }, [guideType]);

    useEffect(() => {
        fetchUserGuides();
    }, [fetchUserGuides]);

    const handleDelete = async (deletedId) => {
        await fetchUserGuides();
    };

    const handleEdit = async (id, updatedData) => {
        try {
            await mainAxios.put(`/userguide/${id}`, {
                title: updatedData.title,
                forUserType: updatedData.forUserType,
                content: updatedData.content,
                section: updatedData.section
            }, {
                headers: {
                    authorization: Cookies.get('token')
                }
            });
            await fetchUserGuides();
        } catch (error) {
            console.error('Error updating user guide:', error);
        }
    };

    return (
        <AdminLayout>
            <Header>
                <div className="flex justify-between items-center">
                    <span className="text-2xl">
                        <b>User Guide</b>
                    </span>
                    <div className="flex items-center">
                        <div className="tabs tabs-boxed mr-4">
                            <a 
                                className={`tab ${guideType === "user" ? "tab-active" : ""}`}
                                onClick={() => setGuideType("user")}
                            >
                                User Guide
                            </a>
                            <a 
                                className={`tab ${guideType === "staff" ? "tab-active" : ""}`}
                                onClick={() => setGuideType("staff")}
                            >
                                Staff Guide
                            </a>
                        </div>
                        <Link
                            to="/admin/user-guide/create"
                            className="btn text-white bg-[#7091E6]"
                        >
                            <img
                                src={PlusSign}
                                className="w-6 h-6 inline-block mr-1 fill-white"
                            />
                            Add User Guide
                        </Link>
                    </div>
                </div>
            </Header>
            <div className="flex flex-row bg-white h-screen">
                <UserGuide onSelect={setSelectedContent} guideType={guideType} />
                <UserGuideContent content={selectedContent || []} onDelete={handleDelete} onEdit={handleEdit} />
            </div>
        </AdminLayout>
    );
};

export default ViewUserGuide;