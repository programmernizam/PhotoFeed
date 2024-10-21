import Modal from "@/components/Modal";
import PhotoDetails from '@/components/PageDetails';
export default function PhotoModal({ params: { id, lang } }) {
    return (
        <Modal>
            <PhotoDetails id={id} lang={lang} />
        </Modal>
    )
}
