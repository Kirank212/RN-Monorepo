import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch, fetchUserDetails } from '@monorepo/shared';

interface UserDetailsScreenProps {
  route: {
    params: {
      userId: number;
    };
  };
}

const UserDetailsScreen: React.FC<UserDetailsScreenProps> = ({ route }) => {
  const { userId } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUserDetails(userId));
  }, [dispatch, userId]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Loading user details...</Text>
      </SafeAreaView>
    );
  }

  if (error || !currentUser) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>{currentUser.name}</Text>

          <Text style={[styles.label, { marginTop: 16 }]}>Email</Text>
          <Text style={styles.value}>{currentUser.email}</Text>

          <Text style={[styles.label, { marginTop: 16 }]}>Username</Text>
          <Text style={styles.value}>{currentUser.username}</Text>

          <Text style={[styles.label, { marginTop: 16 }]}>Phone</Text>
          <Text style={styles.value}>{currentUser.phone}</Text>

          <Text style={[styles.label, { marginTop: 16 }]}>Website</Text>
          <Text style={styles.value}>{currentUser.website}</Text>

          {currentUser.company && (
            <>
              <Text style={[styles.label, { marginTop: 16 }]}>Company</Text>
              <Text style={styles.value}>{currentUser.company.name}</Text>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#F5F5F5',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
  },
  label: {
    fontSize: 12,
    color: '#999',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 16,
    color: '#000',
    marginTop: 4,
  },
  loadingText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#FF0000',
  },
});

export default UserDetailsScreen;
