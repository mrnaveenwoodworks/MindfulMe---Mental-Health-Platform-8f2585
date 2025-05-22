export const testimonialsData = [
  {
    id: "t1",
    name: "Michael Johnson",
    title: "Anxiety Management Client",
    quote: "MindfulMe changed my life. After struggling with anxiety for years, the personalized therapy sessions gave me practical tools I use every day. My therapist truly listened and helped me develop a tailored plan that works for my lifestyle.",
    rating: 5,
    image: "/images/testimonials/michael-johnson.jpg",
    verifiedClient: true,
    sessionType: "Individual Therapy",
    datePublished: "2024-01-15"
  },
  {
    id: "t2",
    name: "Sarah Williams",
    title: "Depression Recovery Journey",
    quote: "When I started with MindfulMe, I was skeptical that online therapy could help with my depression. Six months later, I feel like a different person. The combination of one-on-one therapy and group support made all the difference.",
    rating: 5,
    image: "/images/testimonials/sarah-williams.jpg",
    verifiedClient: true,
    sessionType: "Combined Therapy",
    datePublished: "2024-01-10"
  },
  {
    id: "t3",
    name: "David Chen",
    title: "Stress Management Program Participant",
    quote: "The mindfulness workshops completely transformed how I handle stress at work. I went from constant overwhelm to having practical techniques I can use in any situation. The mobile app reminders help me stay consistent with my practice.",
    rating: 4,
    image: "/images/testimonials/david-chen.jpg",
    verifiedClient: true,
    sessionType: "Wellness Workshop",
    datePublished: "2024-01-05"
  },
  {
    id: "t4",
    name: "Priya Patel",
    title: "Relationship Counseling Client",
    quote: "My partner and I were on the verge of separation when we found MindfulMe's couples counseling. Our therapist helped us rebuild communication and trust in ways we never thought possible. We're now stronger than ever.",
    rating: 5,
    image: "/images/testimonials/priya-patel.jpg",
    verifiedClient: true,
    sessionType: "Couples Therapy",
    datePublished: "2024-01-02"
  },
  {
    id: "t5",
    name: "James Rodriguez",
    title: "Grief Support Group Member",
    quote: "After losing my father, I felt completely lost. The grief support group at MindfulMe connected me with others who truly understood. Our facilitator created such a safe space for healing. I don't know how I would have coped without this community.",
    rating: 5,
    image: "/images/testimonials/james-rodriguez.jpg",
    verifiedClient: true,
    sessionType: "Group Support",
    datePublished: "2023-12-28"
  }
];

// Default fallback image path if a testimonial image is missing
const DEFAULT_PROFILE_IMAGE = "/images/testimonials/default-profile.jpg";

// Utility function to validate testimonial data
export const validateTestimonial = (testimonial) => {
  if (!testimonial || typeof testimonial !== "object") return false;

  const requiredFields = ["id", "name", "title", "quote", "rating"];
  const isValid = requiredFields.every(field => 
    testimonial[field] !== null && 
    testimonial[field] !== undefined
  );

  // Validate rating is within acceptable range
  const hasValidRating = testimonial.rating >= 1 && testimonial.rating <= 5;

  // Ensure image path is a valid string
  if (!testimonial.image || typeof testimonial.image !== "string") {
    testimonial.image = DEFAULT_PROFILE_IMAGE;
  }

  return isValid && hasValidRating;
};

// Get filtered testimonials meeting minimum rating
export const getTestimonialsByMinRating = (minRating = 4) => {
  return testimonialsData
    .filter(testimonial => validateTestimonial(testimonial) && testimonial.rating >= minRating)
    .map(testimonial => ({
      ...testimonial,
      image: testimonial.image || DEFAULT_PROFILE_IMAGE
    }));
};

// Get testimonials by session type
export const getTestimonialsBySessionType = (sessionType) => {
  if (!sessionType) return [];

  return testimonialsData
    .filter(testimonial => 
      validateTestimonial(testimonial) && 
      testimonial.sessionType === sessionType
    )
    .map(testimonial => ({
      ...testimonial,
      image: testimonial.image || DEFAULT_PROFILE_IMAGE
    }));
};

// Get random testimonial
export const getRandomTestimonial = () => {
  const validTestimonials = testimonialsData
    .filter(validateTestimonial)
    .map(testimonial => ({
      ...testimonial,
      image: testimonial.image || DEFAULT_PROFILE_IMAGE
    }));

  if (validTestimonials.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * validTestimonials.length);
  return validTestimonials[randomIndex];
};

// Get featured testimonials
export const getFeaturedTestimonials = (limit = 3) => {
  return testimonialsData
    .filter(validateTestimonial)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit)
    .map(testimonial => ({
      ...testimonial,
      image: testimonial.image || DEFAULT_PROFILE_IMAGE
    }));
};

// Get testimonials by date range
export const getTestimonialsByDateRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return testimonialsData
    .filter(testimonial => {
      if (!validateTestimonial(testimonial) || !testimonial.datePublished) return false;
      const publishDate = new Date(testimonial.datePublished);
      return publishDate >= start && publishDate <= end;
    })
    .map(testimonial => ({
      ...testimonial,
      image: testimonial.image || DEFAULT_PROFILE_IMAGE
    }));
};