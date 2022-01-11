import React, { useRef, useState, useEffect} from "react";
import { useUserContext } from "../context/useContext";
import {
  collection,
  query,
  onSnapshot,
  // doc,
  // updateDoc,
  // deleteDoc,
  // setDoc
} from "firebase/firestore";
import { db } from "../firebase";

const Signup = (props) => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const countryRef = useRef();
  const [ages, setAges] = useState([]);
  const [age, setAge] = useState("");


  useEffect(() => {
    const q = query(collection(db, "age"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let agesArray = [];
      querySnapshot.forEach((doc) => {
        agesArray.push({ ...doc.data(), id: doc.id });
      });
      setAges(agesArray);
    });
    return () => unsub();
  }, []);

  const { registerUser } = useUserContext();

  // const toggleComplete = async (age) => {
  //   await updateDoc(doc(db, "age", age.id), { completed: !age.completed });
  // };

  // const handleDelete = async (id) => {
  //   await deleteDoc(doc(db, "age", id));
  // };
  

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    const country = countryRef.current.value;

    if (email && password && name && country ) registerUser(email, password, name, country );
  };

  // const ageSubmit = async (e) => {
  //   e.preventDefault();
  //   await setDoc(collection(db, "age"), {
  //     age
  //   });
  //   setAge("");
  // };
  
  return (
    <div className="form">
      <h2>New User</h2>
      <form onSubmit={onSubmit}>
      <input placeholder="Full name" type="name" ref={nameRef} />
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <input
          type="text"
          placeholder="How old are you?"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select type="country" ref={countryRef}>
          <option value="" selected> Select country</option> 
          <option value="Dk"> Denmark</option> 
          <option value="Swe"> Sweden</option> 
          <option value="No"> Norway</option> 
       </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
