function TextTitle({ name }: { name: string }) {
  return (
    <h1
      style={{
        fontSize: '24px',
        marginBlockEnd: '10px',
        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
        alignSelf: 'center',
      }}
    >
      {name}
    </h1>
  );
}

export default TextTitle;
