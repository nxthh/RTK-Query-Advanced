# Social Auth User Profile Integration

This implementation provides a complete social media authentication system with user profile management using Redux Toolkit.

## Files Created/Modified

### Core Files
- `src/features/auth/userProfileSlice.js` - Redux slice for user profile management
- `src/hooks/useSocialAuth.js` - Custom hook integrating social auth with Redux
- `src/components/auth/SocialAuthProfile.jsx` - UI component for profile display
- `src/lib/constants.js` - API constants and configuration
- `src/pages/auth/AuthDemo.jsx` - Demo page showing the integration

### Updated Files
- `src/store.js` - Added userProfile reducer to the store

## Features

### 1. User Profile Management
- Create user profiles from social media login data
- Update existing user profiles
- Fetch user profiles from API
- Clear profiles on logout

### 2. Social Authentication Integration
- GitHub authentication (extensible to other providers)
- Automatic profile creation from social auth data
- Persistent Redux state management

### 3. Redux Actions Available
```javascript
// Async thunks
- fetchUserProfile() // Fetch profile from API
- createUserProfileFromSocialAuth(socialUser) // Create profile from social auth
- updateUserProfile(profileData) // Update existing profile

// Sync actions
- clearUserProfile() // Clear profile (logout)
- setUserProfile(profileData) // Set profile manually
```

### 4. Selectors Available
```javascript
- selectUserProfile(state) // Get full profile object
- selectUserProfileStatus(state) // Get loading status
- selectUserProfileError(state) // Get error state
- selectAvatar(state) // Get user avatar
- selectBio(state) // Get user bio
- selectUserName(state) // Get user name
- selectUserEmail(state) // Get user email  
- selectAuthProvider(state) // Get auth provider (github, google, etc)
```

## Usage Example

### 1. Basic Component Usage
```jsx
import React from 'react';
import { useSocialAuth } from '../hooks/useSocialAuth';
import { useSelector } from 'react-redux';
import { selectUserProfile, selectAvatar } from '../features/auth/userProfileSlice';

const MyComponent = () => {
    const { githubLogin, logout, user } = useSocialAuth();
    const userProfile = useSelector(selectUserProfile);
    const avatar = useSelector(selectAvatar);
    
    return (
        <div>
            {user ? (
                <div>
                    <img src={avatar} alt="Avatar" />
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button onClick={githubLogin}>Login with GitHub</button>
            )}
        </div>
    );
};
```

### 2. Manual Profile Updates
```jsx
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../features/auth/userProfileSlice';

const ProfileEditor = () => {
    const dispatch = useDispatch();
    
    const handleUpdateProfile = () => {
        dispatch(updateUserProfile({
            bio: "Updated bio text",
            // other profile fields
        }));
    };
    
    return (
        <button onClick={handleUpdateProfile}>
            Update Profile
        </button>
    );
};
```

## Configuration

### Environment Variables
Make sure you have the following in your `.env` file:
```
VITE_BASE_URL=https://your-api-endpoint.com/api/v1
```

### Firebase Configuration
Ensure your Firebase configuration is properly set up in `src/firebase/firebase-config.js`.

### API Integration
The slice is configured to work with RESTful APIs. Modify the API endpoints in the async thunks as needed:

```javascript
// In userProfileSlice.js, update these URLs to match your API
const response = await fetch(`${BASE_URL}/api/user/profile/`, {
    // ... configuration
});
```

## Data Flow

1. **User clicks "Login with GitHub"**
2. **Firebase handles GitHub OAuth**
3. **useSocialAuth hook receives user data**
4. **createUserProfileFromSocialAuth is dispatched**
5. **User profile is stored in Redux**
6. **Components re-render with new profile data**

## Extending to Other Social Providers

To add support for Google, Facebook, etc.:

1. Add new provider functions to your social auth component
2. Update the `useSocialAuth` hook to handle multiple providers
3. Add provider-specific logic in `createUserProfileFromSocialAuth`

## Error Handling

The system includes comprehensive error handling:
- Network errors during API calls
- Authentication failures
- Invalid social auth responses
- Loading states for better UX

## Security Considerations

- Never store sensitive tokens in localStorage in production
- Use secure HTTP-only cookies for token storage
- Validate all profile data on the backend
- Implement proper CORS policies
- Use environment variables for sensitive configuration

## Testing

To test the social auth integration:

1. Set up Firebase project with GitHub OAuth
2. Configure your GitHub OAuth app
3. Run the demo page: `AuthDemo.jsx`
4. Test login/logout flows
5. Verify Redux DevTools for state changes
