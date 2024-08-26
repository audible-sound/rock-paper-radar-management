import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/auth/SignIn';
import NotFound from './components/errors/NotFound';
import Dashboard from './pages/admin/Dashboard';
import ProtectedRoute from './components/navigation/ProtectedRoute';
import AdminBlogs from './pages/admin/Blogs';
import CreateBlog from './pages/admin/CreateBlog';
import BlogPost from './pages/admin/BlogPost';
import PersonalProfile from './pages/admin/PersonalProfile';
import PublicProfile from './pages/shared/PublicProfile';
import ViewStaffPage from './pages/admin/ViewStaff';
import FeedbackManagementPage from './pages/admin/FeedbackManagement';
import FeedbackView from './pages/admin/FeedbackView';
import BugReportSingleView from './pages/admin/BugReport';
import StaffProfile from './pages/staff/StaffProfile';
import StaffBlogs from './pages/staff/Blogs';
import Feedback from './pages/staff/Feedback';
import CreateUserGuide from './pages/admin/CreateUserGuide';
import ViewUserGuide from './pages/admin/ViewUserGuide';
import UserPosts from './pages/admin/UserPosts';
import ViewPostPage from './pages/admin/PostPage';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute requiredRole="admin">
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/admin/blogs" element={
            <ProtectedRoute requiredRole="admin">
              <AdminBlogs />
            </ProtectedRoute>
          } />
          <Route path="/blog/create" element={
            <ProtectedRoute requiredRole="none">
              <CreateBlog />
            </ProtectedRoute>
          } />
          <Route path="/blog/blog-view/:blogId" element={
            <ProtectedRoute requiredRole="none">
              <BlogPost />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute requiredRole="admin">
              <PersonalProfile />
            </ProtectedRoute>
          } />
          <Route path="/public-profile/:username" element={
            <ProtectedRoute requiredRole="none">
              <PublicProfile />
            </ProtectedRoute>
          } />
          <Route path="/admin/staff-view" element={
            <ProtectedRoute requiredRole="admin">
              <ViewStaffPage />
            </ProtectedRoute>
          } />
          <Route path="/admin/feedback-management" element={
            <ProtectedRoute requiredRole="admin">
              <FeedbackManagementPage />
            </ProtectedRoute>
          } />
          <Route path="/admin/feedback/:id" element={
            <ProtectedRoute requiredRole="admin">
              <FeedbackView />
            </ProtectedRoute>
          } />
          <Route path="/admin/bugreport/:id" element={
            <ProtectedRoute requiredRole="admin">
              <BugReportSingleView />
            </ProtectedRoute>
          } />
          <Route path="/staff/profile" element={
            <ProtectedRoute requiredRole="staff">
              <StaffProfile />
            </ProtectedRoute>
          } />
          <Route path="/staff/blogs" element={
            <ProtectedRoute requiredRole="staff">
              <StaffBlogs />
            </ProtectedRoute>
          } />
          <Route path="/staff/feedback" element={
            <ProtectedRoute requiredRole="staff">
              <Feedback />
            </ProtectedRoute>
          } />
          <Route path="/admin/user-guide" element={
            <ProtectedRoute requiredRole="admin">
              <ViewUserGuide isUser={false} />
            </ProtectedRoute>
          } />
          <Route path="/admin/user-guide/create" element={
            <ProtectedRoute requiredRole="admin">
              <CreateUserGuide />
            </ProtectedRoute>
          } />
          <Route path="/admin/posts" element={
            <ProtectedRoute requiredRole="admin">
              <UserPosts />
            </ProtectedRoute>
          } />
          <Route path="/admin/post-view" element={
            <ProtectedRoute requiredRole="admin">
              <ViewPostPage />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;