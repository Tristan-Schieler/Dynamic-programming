#ifndef COUNT
#define COUNT
#include <vector>
#include <fstream>
#include <string>

class Count {
public:
   int ODMhelper(const std::vector<int> data, const int t);
   int ODNMhelper(const std::vector<int> data, const int t);
   int OrderDoesMatter(const std::vector<int> data, const int t);
   int OrderDoesNotMatter(const std::vector<int> data, const int t, const int check);
private:
   std::vector<int> count;
   std::vector<std::vector<int> > solution;
   int final;
};
#endif