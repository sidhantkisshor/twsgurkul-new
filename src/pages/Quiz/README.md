# Personalized Trading Quiz

## Overview
This is a sophisticated quiz system that segments visitors and guides them to the most appropriate trading program based on their profile. It's designed to maximize conversions by providing a personalized experience.

## Features

### 1. **Smart Segmentation Algorithm**
The quiz analyzes 6 key factors:
- Trading experience level
- Financial goals
- Time availability
- Starting capital
- Main pain points
- Preferred learning style

### 2. **Three Main Paths**
Based on responses, users are directed to:
- **Crypto Page**: For beginners wanting evening trading (7-9PM system)
- **Footprint Page**: For advanced traders seeking institutional edge
- **Mentorship Page**: For comprehensive education with tiers (Lite/Pro/Max)

### 3. **Psychological Triggers**
- Urgency counters (time-based scarcity)
- Live social proof (recent quiz takers)
- Personalized bonus offers
- Progress indicators
- Authority positioning

### 4. **Conversion Optimization**
- Lead capture before showing results
- Personalized messaging based on answers
- Specific bonus offers per segment
- Direct routing to relevant sales pages

## How to Use

1. **Access the Quiz**: Navigate to `/quiz`
2. **Landing Page**: Shows benefits of taking the quiz
3. **Quiz Flow**: 6 questions with engaging UI
4. **Results Page**: Personalized recommendation with lead capture
5. **Redirect**: Takes user to appropriate sales page

## Technical Implementation

### Components:
- `QuizLandingPage.tsx`: Entry point with urgency elements
- `PersonalizedQuiz.tsx`: Main quiz logic and UI

### Key Features:
- Framer Motion animations
- Progress tracking
- GTM/Analytics integration
- Mobile responsive
- Fast loading

## Customization

### To modify quiz logic:
Edit the `calculateResult` function in `PersonalizedQuiz.tsx`

### To add/modify questions:
Update the `questions` array in `PersonalizedQuiz.tsx`

### To change routing:
Modify the `handleFinalSubmit` function

## Optional Enhancements

1. **Install canvas-confetti** for celebration effects:
   ```bash
   npm install canvas-confetti
   ```

2. **Add backend integration** to save quiz results

3. **A/B test different questions** to optimize conversions

4. **Add email capture** in addition to phone

## Conversion Tips

1. **Promote the Quiz**:
   - Add quiz CTA to all pages
   - Use exit-intent popups
   - Include in email campaigns

2. **Test Different Angles**:
   - "Find Your Trading Style"
   - "Get ₹15K in Personalized Bonuses"
   - "Why 97% Choose Wrong (Don't Be Them)"

3. **Follow Up**:
   - Send personalized emails based on quiz results
   - Create retargeting campaigns per segment
   - Offer time-limited bonuses

## Analytics to Track

- Quiz start rate
- Completion rate
- Conversion rate per segment
- Most common paths
- Drop-off points

This quiz is designed to feel like a valuable diagnostic tool while actually being a sophisticated sales funnel that segments and converts visitors at a higher rate than generic landing pages.