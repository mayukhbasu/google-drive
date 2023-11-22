import './CreateButton.css';

interface CreateButtonProps {
  onClick: () => void;
}

const CreateButton: React.FC<CreateButtonProps> = ({onClick}) => {
  return (
    <button className="bottom-right-button" onClick={onClick}>+</button>
  );
};

export default CreateButton;