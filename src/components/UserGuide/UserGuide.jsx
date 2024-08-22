import UserGuideSection from "./UserGuideSection";
import { useEffect, useState } from "react";
import mainAxios from "../../api/mainAxios";

const UserGuide = ({ onSelect }) => {
  const [userGuideData, setUserGuideData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await mainAxios.get('/userguide/');
      const transformedData = transformApiData(response.data.data);
      setUserGuideData(transformedData);
    };
    fetchData();
  }, []);

  const transformApiData = (apiData) => {
    const groupedData = apiData.reduce((acc, item) => {
      if (!acc[item.section]) {
        acc[item.section] = [];
      }
      acc[item.section].push({
        id: item.id,
        index: acc[item.section].length + 1,
        title: item.title,
        desc: item.content
      });
      return acc;
    }, {});

    return Object.entries(groupedData).map(([section, content]) => ({
      section,
      content
    }));
  };

  return (
    <div>
        {userGuideData.map((guide, index) => (
          <UserGuideSection
            key={index}
            section={guide.section}
            content={guide.content}
            onSelect={onSelect}
          />
        ))}
    </div>
  );
};

export default UserGuide;
