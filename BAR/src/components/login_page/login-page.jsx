import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { styles } from './login-page.styles';

const DUMMY_CREDENTIALS = {
  email: 'demo@bar.com',
};

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  function handleLogin() {
    if (email.trim().toLowerCase() !== DUMMY_CREDENTIALS.email) {
      setMessage(`Use the demo email ${DUMMY_CREDENTIALS.email}.`);
      return;
    }

    router.replace('/home');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">
          <View style={styles.card}>
            <View style={styles.brandMark}>
              <Text style={styles.brandMarkText}>B</Text>
            </View>

            <Text style={styles.eyebrow}>WELCOME BACK</Text>
            <Text style={styles.title}>Sign in to BAR</Text>
            <Text style={styles.subtitle}>Use the demo email below. Any password will work.</Text>

            <View style={styles.form}>
              <Text style={styles.label}>Email address</Text>
              <TextInput
                autoCapitalize="none"
                autoComplete="email"
                keyboardType="email-address"
                onChangeText={(value) => {
                  setEmail(value);
                  setMessage('');
                }}
                placeholder={DUMMY_CREDENTIALS.email}
                placeholderTextColor="#94A3B8"
                style={styles.input}
                value={email}
              />

              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="current-password"
                  onChangeText={(value) => {
                    setPassword(value);
                    setMessage('');
                  }}
                  placeholder="Enter your password"
                  placeholderTextColor="#94A3B8"
                  secureTextEntry={!showPassword}
                  style={styles.passwordInput}
                  value={password}
                />
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
                  onPress={() => setShowPassword((visible) => !visible)}
                  style={styles.showPasswordButton}>
                  <Text style={styles.showPasswordText}>{showPassword ? 'Hide' : 'Show'}</Text>
                </Pressable>
              </View>

              {message ? <Text style={styles.message}>{message}</Text> : null}

              <Pressable
                accessibilityRole="button"
                onPress={handleLogin}
                style={({ pressed }) => [styles.submitButton, pressed && styles.submitButtonPressed]}>
                <Text style={styles.submitButtonText}>Sign in</Text>
              </Pressable>
            </View>
          </View>
          <Text style={styles.bottomCaption}>BAR · YOUR ACCOUNT, ALL IN ONE PLACE</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
