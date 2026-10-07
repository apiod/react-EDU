export default function Book({ name, page, author }) {
  return (
    <>
      <h3>
        책 제목: {name} {typeof name}
      </h3>
      <h4>
        페이지 수: {page} {typeof page}
      </h4>
      {author && (
        <h4>
          저자: 이름: {author.name} / {author.age} / {author.addr}
        </h4>
      )}
      <hr />
    </>
  );
}
