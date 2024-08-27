import { useState } from "react";
import Header from "../../components/layouts/Header";
import StaffLayout from "../../components/layouts/StaffLayout";
import UserGuide from "../../components/ui/UserGuide";
import UserGuideContent from "../../components/ui/UserGuideContent";

const StaffUserGuide = () => {
    const [selectedContent, setSelectedContent] = useState([]);

    return (
        <StaffLayout>
            <Header>
                <div className="flex justify-between items-center">
                    <span className="text-2xl">
                        <b>Staff User Guide</b>
                    </span>
                </div>
            </Header>
            <div className="flex flex-row bg-white h-screen">
                <UserGuide onSelect={setSelectedContent} guideType="staff" />
                <UserGuideContent content={selectedContent || []} />
            </div>
        </StaffLayout>
    );
};

export default StaffUserGuide;
