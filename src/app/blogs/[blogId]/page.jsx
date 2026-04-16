const blogs = [
    {
        id: 1,
        title: "Getting Started with Blogging",
        author: "John Doe",
        date: "2026-04-10",
        category: "Blogging",
        tags: "blogging, beginner, writing",
        content: "This is a beginner's guide to starting your own blog.",
        image: "https://example.com/blog1.jpg"
    },
    {
        id: 2,
        title: "Top 10 JavaScript Tips",
        author: "Jane Smith",
        date: "2026-04-11",
        category: "Programming",
        tags: "javascript, coding, tips",
        content: "Improve your JavaScript skills with these 10 tips.",
        image: "https://example.com/blog2.jpg"
    },
    {
        id: 3,
        title: "Healthy Lifestyle Habits",
        author: "Emily Johnson",
        date: "2026-04-12",
        category: "Health",
        tags: "health, lifestyle, wellness",
        content: "Simple habits to maintain a healthy lifestyle.",
        image: "https://example.com/blog3.jpg"
    },
    {
        id: 4,
        title: "Travel Guide for Beginners",
        author: "Michael Brown",
        date: "2026-04-13",
        category: "Travel",
        tags: "travel, guide, tips",
        content: "Everything you need to know before your first trip.",
        image: "https://example.com/blog4.jpg"
    },
    {
        id: 5,
        title: "How to Stay Productive",
        author: "Sarah Wilson",
        date: "2026-04-14",
        category: "Productivity",
        tags: "productivity, focus, work",
        content: "Learn how to stay productive throughout the day.",
        image: "https://example.com/blog5.jpg"
    }
];


const BlogDetailPage = async ({ params }) => {
    const { blogId } = await params;
    const blog = blogs.find( blog => blog.id === parseInt(blogId) )
    return (
        <div>
            <h4 className="text-3xl">Blog Details coming soon</h4>
            {
                blog && <div>
                    <h2 className="font-semibold text-3xl">{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            }
        </div>
    );
};

export default BlogDetailPage;