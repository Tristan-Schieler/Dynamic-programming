#include "Count.hpp"
#include <iostream>
int Count::ODMhelper(const std::vector<int> data, const int t) {
   for(int i = 0; i <= t; i++) { 
      count.push_back(0);
   }
   int x = OrderDoesMatter(data,t);
   count.clear();
   return x;
}
int Count::OrderDoesMatter(const std::vector<int> data, const int t) {
   if(count.at(t) != 0) {//check array
//      std::cout << "Already in map" << std::endl;
      return count.at(t);
   }
   if (t == 0) {//base case. returns 
      count.at(t) = 1;
   }
   unsigned int j;
   for(j = 0; j < data.size(); j++) { 
      if((t - data.at(j)) >= 0) {
         count.at(t) += OrderDoesMatter(data, (t - data.at(j)));
      }
   }
   return count.at(t);
}

int Count::ODNMhelper(const std::vector<int> data, const int t) {
   int k, r;
   for(r = 0; r <= t; r++) {
      solution.push_back({});
      for(k = 0; k< data.size(); k++) {
         solution[r].push_back(0);
      }
   }
   int x;
   x = OrderDoesNotMatter(data, t, data.size()-1);
   for(int l = 0; l <=t; l++) {
      solution[l].clear();
   }
   solution.clear();
   return x;
}

int Count::OrderDoesNotMatter(const std::vector<int> data, const int t, const int check) {
   if (solution[t][check] != 0) {//already in map 
      return solution[t][check];
   }
   //Base case
   if(t == 0){
       solution[t][check] = 1;
   }
   
   unsigned int j;
   for(j = 0; j < data.size(); j++) { 
      if((t - data.at(j)) >= 0 && data.at(check) >= data.at(j)) {
         solution[t][check] += OrderDoesNotMatter(data, (t - data.at(j)), j);
      }
   }
   return solution[t][check];
}

int main() {
   int input_size;
   std::ifstream inFS;
   std::ofstream outFS;
   inFS.open("input.txt");
   outFS.open("output.txt", std::ofstream::trunc);
   if(!inFS.is_open() || !outFS.is_open()) {
      std::cout << "Error opening files" << std::endl;
      return 0;
   }
   inFS >> input_size;
   int it, j, tee, dat_size, temp, x, y;
   std::vector<int> dat;
   Count c;
   for(it = 0; it < input_size && inFS.good(); it++){
      inFS >> tee;
      inFS >> dat_size;
         for(j=0; j < dat_size; j++) {
            inFS >> temp;
            dat.push_back(temp);
         }
      x = c.ODNMhelper(dat, tee);
      y = c.ODMhelper(dat,tee);
      outFS << y << " "<< x <<std::endl;
      dat.clear();
   }
   return 0;
}