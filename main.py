import streamlit as st
from gtts import gTTS
import io
import base64

def text_to_speech(text, lang='id'):
    tts = gTTS(text=text, lang=lang, slow=False)
    buf = io.BytesIO()
    tts.write_to_fp(buf)
    buf.seek(0)
    return buf

def main():
    st.set_page_config("Text To Speech")
    st.title("Aplikasi Text-To-Speech")
    st.write("""
    Aplikasi ini memungkinkan Anda untuk mengubah teks menjadi suara.
    Cukup masukkan teks yang ingin diubah, pilih bahasa yang diinginkan, dan klik tombol untuk menghasilkan audio.
    Anda dapat memilih antara bahasa Inggris dan Indonesia untuk konversi teks ke suara.
    """)

    text = st.text_area("Masukkan teks yang ingin diubah menjadi suara:")

    language = st.selectbox("Pilih bahasa:", ["english", "indonesia"])
    if language == "english":
        lang = "en"
    else:
        lang = "id"

    if st.button("Ubah Teks Menjadi Suara"):
        if text:
            audio_buffer = text_to_speech(text, lang)
            audio_base64 = base64.b64encode(audio_buffer.read()).decode('utf-8')
            audio_url = f"data:audio/mp3;base64,{audio_base64}"
            st.audio(audio_url, format='audio/mp3')
        else:
            st.warning("Masukkan teks terlebih dahulu.")

if __name__ == "__main__":
    main()