(() => {
  const user = {
    name: "Thiago ",
    lastName: "Aquino A. de Lima"
  };

  function getUserWithFullName(user) {
    return {
      ...user,
      fullName: `${user.name} ${user.lastName}`
    };
  }

  const userWithFullName = getUserWithFullName(user);
})();
