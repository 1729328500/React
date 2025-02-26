const Student = ({ name, avatar, age }) => {
  return (
    <div>
      <h1>
        姓名：{name}, 年龄：{age}
      </h1>
      <img src={avatar} alt={`${name}的头像`} />
    </div>
  );
};

export default Student;
