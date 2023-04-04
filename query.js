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
    
    
