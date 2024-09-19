import './index.css';

interface Props {
  size?: number;
  color?: string;
}

const Spinner = ({ size = 36, color = '#09f' }: Props) => {
  return (
    <div className="spinner-container">
      <div
        className="spinner"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderLeftColor: color,
        }}
      ></div>
    </div>
  );
};

export default Spinner;
