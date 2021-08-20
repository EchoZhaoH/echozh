import "./style.scss";

export function Film() {
  return (
    <div className="film-container">
      <div className="film-top"></div>
      <div className="film-inner">
        <div className="film-title text-center">Echo 杂记</div>
        <div className="film-desc text-center">
          人生百态
        </div>
        <span className="film-date">
          2021-08-20
        </span>
      </div>
      <div className="film-bottom"></div>
    </div>
  )
}