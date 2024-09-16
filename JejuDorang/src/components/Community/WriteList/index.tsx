import { postQuestion } from '@apis/community';
import { useState } from 'react';

interface Props {
  handleModal: () => void;
  fetchQuestions: () => void;
}

const WriteList = ({ handleModal, fetchQuestions }: Props) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleSubmit = async () => {
    const res = await postQuestion(title, content);
    if (res === false) {
      alert('질문 작성에 실패했습니다.');
      return;
    }
    fetchQuestions();
    handleModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-lg font-semibold mb-4">제목</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <h2 className="text-lg font-semibold mb-2">내용</h2>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요"
          maxLength={1000}
          className="w-full p-2 border border-gray-300 rounded-md mb-2 h-40 resize-none"
        />
        <div className="text-right text-sm text-gray-500 mb-4">
          {content.length} / 1000
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={handleModal}
            className="px-4 py-2 bg-gray-200 text-black rounded-md hover:text-white"
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-primary-orange text-white rounded-md hover:text-black"
          >
            작성 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteList;
