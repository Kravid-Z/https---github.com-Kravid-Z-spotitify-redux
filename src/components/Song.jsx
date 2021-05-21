import React from "react";
import { connect } from "react-redux";
import { toogleFavoritesAction } from "../redux/actions";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Button } from "react-bootstrap";
const mapStateToProps = (state) => state.favorites;
const Song = (props) => {
  console.log("props song", props);
  return (
    <div className="py-3 trackHover">
      <span className="card-title trackHover px-3" style={{ color: "white" }}>
        {props.track.title}
      </span>
      <small className="duration" style={{ color: "white" }}>
        <span className="mx-3">
          {props.favorites.every((e) => e.id !== props.track.id) ? (
            <AiOutlineHeart size={20} style={{ color: "white" }} onClick={() => props.toogleFavoritesAction(props.track)} />
          ) : (
            <AiFillHeart size={20} style={{ color: "white" }} onClick={() => props.toogleFavoritesAction(props.track)} />
          )}
        </span>
        {Math.floor(parseInt(props.track.duration) / 60)}:
        {parseInt(props.track.duration) % 60 < 10 ? "0" + (parseInt(props.track.duration) % 60) : parseInt(props.track.duration) % 60}
      </small>
    </div>
  );
};

export default connect(mapStateToProps, { toogleFavoritesAction })(Song);
