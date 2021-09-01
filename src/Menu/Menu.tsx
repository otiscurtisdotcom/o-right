const Menu = (props: {
  goToLevel(level: number): any
}) => {
  const levels: JSX.Element[] = [];
  for (let i = 1; i < 11; i++) {
    levels.push(
      <ul onClick={() => {props.goToLevel(i); }}>{i}</ul>
    )
  };

  return (
    <div>
      {levels}
    </div>
  );
}

export default Menu;