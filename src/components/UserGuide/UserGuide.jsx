import UserGuideSection from "./UserGuideSection";

const UserGuide = ({ onSelect }) => {
  const userGuideData = [
    {
      section: "Post Management",
      content: [
        {
          index: 1.1,
          title: "Create Post",
          desc: `
          Steps to create a post...
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          `
        },
        {
          index: 1.2,
          title: "Edit Post",
          desc: `
          Steps to edit an existing post...
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          `
        },
        {
          index: 1.3,
          title: "Delete Post",
          desc: `
          Instructions to delete a post...
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          `
        },
      ],
    },
    {
      section: "Comment Guidelines",
      content: [
        {
          index: 2.1,
          title: "Managing Comments",
          desc: `
          How to manage comments effectively...
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          `
        },
        {
          index: 2.2,
          title: "Moderating Comments",
          desc: `
          Guidelines for moderating comments...
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          `
        },
      ],
    },
    {
      section: "Likes",
      content: [
        {
          index: 3.1,
          title: "Managing Likes",
          desc: `
          How to manage likes effectively...
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          `
        },
      ],
    },
    {
      section: "Map Guidance",
      content: [
        { 
          index: 4.1, 
          title: "Icons", 
          desc: `
          How to click on icons...
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          `
        },
        {
          index: 4.2,
          title: "Moderating Comments",
          desc: `
          Guidelines for moderating comments...
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis molestias doloribus dicta tempora minima asperiores? Quisquam doloribus quibusdam, reprehenderit voluptatum officia error vitae asperiores soluta hic quos ipsa ut?
          `
        },
      ],
    },
  ];

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
