  useEffect(() => {
      getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
        if (docSnap.exists) {
          setUser(docSnap.data());
        }
      });
    
    
    
    
      const deleteImage = async () => {
      try {
        const confirm = window.confirm("Delete avatar?");
        if (confirm) {
          await deleteObject(ref(storage, user.avatarPath));

          await updateDoc(doc(db, "users", auth.currentUser.uid), {
            avatar: "",
            avatarPath: "",
          });
          history.replace("/");
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    
    
    
        useEffect(() => {
      const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
      let unsub = onSnapshot(doc(db, "lastMsg", id), (doc) => {
        setData(doc.data());
      });
      return () => unsub();
    }, []);
    
    
    
          const usersRef = collection(db, "users");
      // create query object
      const q = query(usersRef, where("uid", "not-in", [user1]));
      // execute query
    
    
    
    
      useEffect(() => {
    const usersRef = collection(db, "users");
    // create query object
    const q = query(usersRef, where("uid", "not-in", [user1]));
    // execute query
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
    return () => unsub();
  }, []);
    
    
