import React, { useState, useEffect } from 'react';
import { User, ShoppingCart } from 'lucide-react';

const AuthSystem = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [month, setMonth] = useState('January');
  const [day, setDay] = useState('01');
  const [phone, setPhone] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  
  const [newsletterName, setNewsletterName] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    const savedLoginState = localStorage.getItem('isLoggedIn');
    const savedUserData = localStorage.getItem('userData');
    
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
    
    if (savedLoginState === 'true' && savedUserData) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(savedUserData));
    }
  }, []);

  const handleLogin = () => {
    setError('');
    
    if (!loginEmail || !loginPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    const user = users.find(user => user.email === loginEmail);
    
    if (!user) {
      setError('User not found. Please create an account first.');
      return;
    }
    
    if (user.password !== loginPassword) {
      setError('Incorrect password');
      return;
    }
    
    setIsLoggedIn(true);
    setUserData(user);
    
    if (rememberMe) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userData', JSON.stringify(user));
    }
    
    setLoginEmail('');
    setLoginPassword('');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
  };

  const handleRegistration = () => {
    setError('');
    
    if (!firstName || !lastName || !regEmail || !regPassword) {
      setError('Please fill in all required fields');
      return;
    }
    
    if (regEmail !== confirmEmail) {
      setError('Emails do not match');
      return;
    }
    
    if (regPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (users.some(user => user.email === regEmail)) {
      setError('User with this email already exists');
      return;
    }
    
    const newUser = {
      firstName,
      lastName,
      email: regEmail,
      password: regPassword,
      phone,
      dateOfBirth: `${month} ${day}`,
      newsletter
    };
    
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    setIsLoggedIn(true);
    setUserData(newUser);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(newUser));
    
    setFirstName('');
    setLastName('');
    setMonth('January');
    setDay('01');
    setPhone('');
    setRegEmail('');
    setConfirmEmail('');
    setRegPassword('');
    setConfirmPassword('');
    setNewsletter(false);
    
    alert('Account created successfully!');
  };

  const handleNewsletterSignup = () => {
    if (!newsletterName || !newsletterEmail) {
      alert('Please fill in all newsletter fields');
      return;
    }
    
    alert('Subscribed to newsletter!');
    setNewsletterName('');
    setNewsletterEmail('');
  };



  const LoginForm = () => (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow">
      <div className="flex border-b">
        <button 
          className={`flex-1 py-2 text-center ${activeTab === 'login' ? 'border-b-2 border-purple-500 font-medium' : 'text-gray-500'}`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button 
          className={`flex-1 py-2 text-center ${activeTab === 'register' ? 'border-b-2 border-purple-500 font-medium' : 'text-gray-500'}`}
          onClick={() => setActiveTab('register')}
        >
          Create Account
        </button>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-center mb-6">WELCOME BACK</h2>
        <p className="text-center text-gray-500 mb-8">Sign into your existing account to earn rewards, check existing orders and more</p>
        
        {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
        
        <div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="text-sm">Remember me</span>
            </label>
            <a href="#" className="text-sm text-gray-500">Forgot Password</a>
          </div>
          
          <button
            onClick={handleLogin}
            className="w-full bg-[#735CFF] text-white py-2 rounded font-medium hover:bg-purple-600 transition"
          >
            Sign In
          </button>
          
          {users.length === 0 && (
            <p className="mt-4 text-center text-sm text-red-500">
              No accounts exist yet. Please create an account first.
            </p>
          )}
        </div>
        
        <div className="mt-8">
          <p className="text-center font-medium mb-4">Express sign in</p>
          <div className="flex space-x-4">
            <button className="flex-1 bg-black text-white py-2 rounded font-medium flex items-center justify-center">
              <span className="mr-2">f</span> 
              Sign in
            </button>
            <button className="flex-1 bg-black text-white py-2 rounded font-medium flex items-center justify-center">
              <span className="mr-2">G</span> 
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const RegistrationForm = () => (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow">
      <div className="flex border-b">
        <button 
          className={`flex-1 py-2 text-center ${activeTab === 'login' ? 'border-b-2 border-purple-500 font-medium' : 'text-gray-500'}`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button 
          className={`flex-1 py-2 text-center ${activeTab === 'register' ? 'border-b-2 border-purple-500 font-medium' : 'text-gray-500'}`}
          onClick={() => setActiveTab('register')}
        >
          Create Account
        </button>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-center mb-6">NEW TO VOLUMENZEIT?</h2>
        <p className="text-center text-gray-500 mb-8">Create a new account</p>
        
        {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
        
        <div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name *"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name *"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm text-gray-500 mb-1">Date of birth</label>
            <div className="flex space-x-2">
              <select 
                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select 
                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              >
                {[...Array(31)].map((_, i) => (
                  <option key={i+1} value={String(i+1).padStart(2, '0')}>
                    {String(i+1).padStart(2, '0')}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email *"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <input
              type="email"
              placeholder="Confirm Email *"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password *"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <input
              type="password"
              placeholder="Confirm Password *"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={newsletter}
                onChange={() => setNewsletter(!newsletter)}
              />
              <span className="text-sm">Sign-up to receive the latest updates and promotions</span>
            </label>
          </div>
          
          <button
            onClick={handleRegistration}
            className="w-full bg-[#735CFF] text-white py-2 rounded font-medium hover:bg-purple-600 transition"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );

  const UserDashboard = () => (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-[#735CFF] py-8 px-4 text-white text-center mb-6">
        <h1 className="text-2xl font-bold">VOLUMENZEIT ACCOUNT</h1>
      </div>
      
      <div className="flex flex-wrap border-b mb-8">
        <button className="py-2 px-4 border-b-2 border-[#735CFF] font-medium">Dashboard</button>
        <button className="py-2 px-4 text-gray-500">Order History</button>
        <button className="py-2 px-4 text-gray-500">Contact Us</button>
        <button 
          className="py-2 px-4 text-gray-500 ml-auto"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      
      <div className="px-4">
        <h2 className="text-3xl font-bold mb-2">Hey, {userData?.firstName} {userData?.lastName}</h2>
        <p className="text-gray-500 mb-8">Welcome to your dashboard, your one-stop-shop for all your recent Volumenzeit account activity.</p>
        
        <div className="bg-white p-6 mb-6 rounded shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Recent Orders</h3>
            <a href="#" className="text-[#735CFF] text-sm">View All orders</a>
          </div>
          <p className="text-gray-500">You haven't placed any order yet.</p>
        </div>
        
        <div className="bg-white p-6 mb-6 rounded shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">My Info</h3>
            <a href="#" className="text-[#735CFF] text-sm">Manage info</a>
          </div>
          <h4 className="text-sm font-medium mb-2">Personal Information</h4>
          <div className="mb-1">
            <span className="font-medium mr-2">Name:</span>
            <span>{userData?.firstName} {userData?.lastName}</span>
          </div>
          <div className="mb-1">
            <span className="font-medium mr-2">Email:</span>
            <span>{userData?.email}</span>
          </div>
          {userData?.phone && (
            <div className="mb-1">
              <span className="font-medium mr-2">Phone:</span>
              <span>{userData?.phone}</span>
            </div>
          )}
          {userData?.dateOfBirth && (
            <div className="mb-1">
              <span className="font-medium mr-2">Date of Birth:</span>
              <span>{userData?.dateOfBirth}</span>
            </div>
          )}
          {userData?.newsletter && (
            <div className="mt-2 text-sm text-green-600">
              You are subscribed to our newsletter
            </div>
          )}
        </div>
        
        <div className="bg-white p-6 mb-8 rounded shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Address Book</h3>
            <a href="#" className="text-[#735CFF] text-sm">Manage Address(es)</a>
          </div>
          <p className="text-gray-500 mb-4">You have not yet added address.</p>
          <button className="bg-[#735CFF] text-white text-sm px-4 py-2 rounded">Add New</button>
        </div>
      </div>
      
      <div className="bg-[#735CFF] py-12 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-2">Don't Miss Your Chance To Get Free Giveaway</h2>
        <h3 className="text-xl font-bold mb-4">Sign Up To Our Newsletter</h3>
        <p className="mb-6 max-w-lg mx-auto">We will inform you about coming giveaways, Offers, Online Store preparation progress and start of sales.</p>
        
        <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto mb-4">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 px-3 py-2 rounded text-black"
            value={newsletterName}
            onChange={(e) => setNewsletterName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-3 py-2 rounded text-black"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
          />
        </div>
        <button 
          onClick={handleNewsletterSignup}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Sign up
        </button>
        <p className="text-sm mt-2">You agree to our Terms and Conditions</p>
      </div>
    </div>
  );

  const RegisteredUsers = () => (
    <div className="mt-8 p-4 bg-white rounded shadow max-w-md mx-auto">
      <h3 className="font-bold mb-2">Registered Users (Debug Info)</h3>
      {users.length === 0 ? (
        <p>No users registered yet</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index} className="mb-2 pb-2 border-b last:border-b-0">
              {user.firstName} {user.lastName} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      
      <main className="py-8 px-4">
        {isLoggedIn ? <UserDashboard /> : activeTab === 'login' ? <LoginForm /> : <RegistrationForm />}
        
        {!isLoggedIn && <RegisteredUsers />}
      </main>
      
    </div>
  );
};

export default AuthSystem;