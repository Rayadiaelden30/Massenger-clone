import React, { useState, useEffect } from 'react';
import { auth } from './Firebase';  // استدعاء Firebase
import Messenger from './Messenger';  // مكون المحادثات (ستقوم بإنشائه لاحقًا)
import SignIn from './Signin';  // مكون تسجيل الدخول
import './App.css';
function App() {
  const [user, setUser] = useState(null);  // حالة لتخزين معلومات المستخدم

  useEffect(() => {
    // التحقق من حالة المستخدم (إذا كان مسجل الدخول)
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);  // المستخدم مسجل الدخول
      } else {
        setUser(null);  // المستخدم غير مسجل الدخول
      }
    });

    return () => unsubscribe();  // تنظيف الاشتراك
  }, []);

  return (
    <div className="App">
      {user ? <Messenger /> : <SignIn />}  {/* عرض المحادثات إذا كان مسجل الدخول، وإلا عرض تسجيل الدخول */}
    </div>
  );
}

export default App;
