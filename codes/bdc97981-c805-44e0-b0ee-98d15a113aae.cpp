
#include <bits/stdc++.h>
using namespace std;
int find_index(int arr[], int n, int K)
{

	int start = 0;
	int end = n - 1;
		while (start <= end) {
		int mid = (start + end) / 2;
	
		if (arr[mid] == K)
			return mid;
		else if (arr[mid] < K)
			start = mid + 1;
		else
			end = mid - 1;
	}
	
	return end + 1;
}


int main()
{
	int arr[] = { 1, 3, 5, 6 };
	int n = sizeof(arr) / sizeof(arr[0]);
	int K = 2;
	cout << find_index(arr, n, K) << endl;
	return 0;
}


