# 🌍 Community-Care Project

This project is part of the **Community Service Initiative** aimed at raising awareness about hygiene, water conservation, waste management, and sustainable living.  

The project uses **Supabase**, **YouTube Data API**, and **AI-powered chatbot integration** to deliver content and interactive features.

---

## ⚙️ Environment Setup

Before running the project, you need to configure your environment variables.  
All required keys are defined in the `.env.example` file.

### 📄 `.env.example` Structure

```bash
# 🔹 Supabase Project Credentials
# Replace with your actual Supabase project URL and anon key from your Supabase dashboard
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# 🔹 YouTube Data API (for video management features)
# Get this key from Google Cloud Console > YouTube Data API v3
VITE_YOUTUBE_API_KEY=your_youtube_api_key

# 🔹 AI Chatbot API (OpenAI or any provider you configure)
# Store your model provider's API key here
VITE_OPENAI_API_KEY=your_openai_api_key

# 🔹 Google Maps API (optional - for showing recycling centers, locations, etc.)
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# 🔹 Google Translate API (optional - for multilingual chatbot support)
VITE_GOOGLE_TRANSLATE_API_KEY=your_google_translate_api_key
