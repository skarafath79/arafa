import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-6">
    <h3 className="font-poppins text-2xl font-bold">{title}</h3>
    {subtitle ? (
      <p className="text-sm text-muted-foreground mt-1 font-inter">{subtitle}</p>
    ) : null}
  </div>
);

const MiniApps = () => {
  // 1) Calculator
  const [calcA, setCalcA] = useState<string>("");
  const [calcB, setCalcB] = useState<string>("");
  const [calcOp, setCalcOp] = useState<"+" | "-" | "*" | "/">("+");
  const [calcResult, setCalcResult] = useState<string>("");

  const doCalc = () => {
    const a = parseFloat(calcA);
    const b = parseFloat(calcB);
    if (Number.isNaN(a) || Number.isNaN(b)) {
      setCalcResult("Please enter valid numbers.");
      return;
    }
    let r: number;
    switch (calcOp) {
      case "+":
        r = a + b;
        break;
      case "-":
        r = a - b;
        break;
      case "*":
        r = a * b;
        break;
      case "/":
        if (b === 0) {
          setCalcResult("Cannot divide by zero.");
          return;
        }
        r = a / b;
        break;
    }
    setCalcResult(String(r));
  };

  // 2) Star pattern
  const [starRows, setStarRows] = useState<string>("5");
  const [starOutput, setStarOutput] = useState<string>("");
  const genStars = () => {
    const n = parseInt(starRows, 10);
    if (Number.isNaN(n) || n <= 0) {
      setStarOutput("Enter a positive integer.");
      return;
    }
    const lines: string[] = [];
    for (let i = 1; i <= n; i++) {
      lines.push("*".repeat(i));
    }
    setStarOutput(lines.join("\n"));
  };

  // 3) Palindrome check
  const [palInput, setPalInput] = useState<string>("");
  const [palResult, setPalResult] = useState<string>("");
  const checkPalindrome = () => {
    const s = palInput.trim();
    if (!s) {
      setPalResult("Enter a value.");
      return;
    }
    const rev = s.split("").reverse().join("");
    setPalResult(s === rev ? "Palindrome" : "Not a palindrome");
  };

  // 4) Fahrenheit to Celsius
  const [fVal, setFVal] = useState<string>("");
  const [cOut, setCOut] = useState<string>("");
  const convertFtoC = () => {
    const f = parseFloat(fVal);
    if (Number.isNaN(f)) {
      setCOut("Enter a valid Fahrenheit value.");
      return;
    }
    const c = ((f - 32) * 5) / 9;
    setCOut(c.toFixed(2) + " °C");
  };

  // 5) Student Data form
  const [student, setStudent] = useState({
    name: "",
    class: "",
    roll: "",
    dob: "",
    address: "",
  });
  const [studentPreview, setStudentPreview] = useState<string>("");

  const submitStudent = () => {
    if (!student.name || !student.class || !student.roll || !student.dob || !student.address) {
      setStudentPreview("Please fill all fields.");
      return;
    }
    setStudentPreview(
      `Name: ${student.name}\nClass: ${student.class}\nRoll: ${student.roll}\nDOB: ${student.dob}\nAddress: ${student.address}`
    );
  };

  // 6) Table of 5
  const tableRows = Array.from({ length: 10 }, (_, i) => i + 1).map((n) => ({
    n,
    prod: 5 * n,
  }));

  // 7) DOM manipulation: add child
  const [children, setChildren] = useState<string[]>([]);
  const addChild = () => {
    setChildren((prev) => [...prev, `Child #${prev.length + 1}`]);
  };

  return (
    <section id="mini-apps" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">Mini Apps</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
              A collection of small interactive utilities implemented with React.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Calculator */}
            <Card className="p-6 bg-card/50 border-border/50">
              <SectionTitle title="Calculator" subtitle="Simple two-number operations" />
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="col-span-1">
                  <Label htmlFor="calcA">A</Label>
                  <Input id="calcA" placeholder="e.g. 10" value={calcA} onChange={(e) => setCalcA(e.target.value)} />
                </div>
                <div className="col-span-1">
                  <Label htmlFor="calcOp">Op</Label>
                  <select
                    id="calcOp"
                    className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                    value={calcOp}
                    onChange={(e) => setCalcOp(e.target.value as any)}
                  >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <Label htmlFor="calcB">B</Label>
                  <Input id="calcB" placeholder="e.g. 5" value={calcB} onChange={(e) => setCalcB(e.target.value)} />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button onClick={doCalc} className="bg-primary">Calculate</Button>
                <span className="text-sm text-muted-foreground">Result: {calcResult || "-"}</span>
              </div>
            </Card>

            {/* Star Pattern */}
            <Card className="p-6 bg-card/50 border-border/50">
              <SectionTitle title="Star Pattern" subtitle="Generate incremental star rows" />
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="col-span-2">
                  <Label htmlFor="rows">Rows</Label>
                  <Input id="rows" value={starRows} onChange={(e) => setStarRows(e.target.value)} />
                </div>
                <div className="col-span-1 flex items-end">
                  <Button className="w-full bg-primary" onClick={genStars}>Generate</Button>
                </div>
              </div>
              <Textarea value={starOutput} readOnly rows={6} className="font-mono" />
            </Card>

            {/* Palindrome Checker */}
            <Card className="p-6 bg-card/50 border-border/50">
              <SectionTitle title="Palindrome Checker" subtitle="Check if a string or number reads same both ways" />
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="col-span-2">
                  <Label htmlFor="pal">Value</Label>
                  <Input id="pal" value={palInput} onChange={(e) => setPalInput(e.target.value)} placeholder="racecar / 121" />
                </div>
                <div className="col-span-1 flex items-end">
                  <Button className="w-full bg-primary" onClick={checkPalindrome}>Check</Button>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Result: {palResult || "-"}</div>
            </Card>

            {/* Fahrenheit to Celsius */}
            <Card className="p-6 bg-card/50 border-border/50">
              <SectionTitle title="Fahrenheit → Celsius" subtitle="Convert temperature" />
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="col-span-2">
                  <Label htmlFor="fval">Fahrenheit</Label>
                  <Input id="fval" value={fVal} onChange={(e) => setFVal(e.target.value)} placeholder="e.g. 98.6" />
                </div>
                <div className="col-span-1 flex items-end">
                  <Button className="w-full bg-primary" onClick={convertFtoC}>Convert</Button>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Celsius: {cOut || "-"}</div>
            </Card>

            {/* Student Data Form */}
            <Card className="p-6 bg-card/50 border-border/50 md:col-span-2">
              <SectionTitle title="Student Data" subtitle="Enter details and preview" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="sname">Name</Label>
                  <Input id="sname" value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="sclass">Class</Label>
                  <Input id="sclass" value={student.class} onChange={(e) => setStudent({ ...student, class: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="sroll">Roll</Label>
                  <Input id="sroll" value={student.roll} onChange={(e) => setStudent({ ...student, roll: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="sdob">Date of Birth</Label>
                  <Input id="sdob" type="date" value={student.dob} onChange={(e) => setStudent({ ...student, dob: e.target.value })} />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="saddr">Address</Label>
                  <Textarea id="saddr" rows={3} value={student.address} onChange={(e) => setStudent({ ...student, address: e.target.value })} />
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <Button className="bg-primary" onClick={submitStudent}>Preview</Button>
                <Button variant="outline" onClick={() => { setStudent({ name: "", class: "", roll: "", dob: "", address: "" }); setStudentPreview(""); }}>Clear</Button>
              </div>
              <Textarea className="mt-4 font-mono" readOnly rows={5} value={studentPreview} placeholder="Preview will appear here" />
            </Card>

            {/* Table of 5 */}
            <Card className="p-6 bg-card/50 border-border/50">
              <SectionTitle title="Table of 5" subtitle="Generated with JavaScript" />
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Expression</TableHead>
                    <TableHead>Result</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableRows.map((row) => (
                    <TableRow key={row.n}>
                      <TableCell>{`5 x ${row.n}`}</TableCell>
                      <TableCell>{row.prod}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

            {/* DOM Manipulation: Add Child */}
            <Card className="p-6 bg-card/50 border-border/50">
              <SectionTitle title="DOM Manipulation" subtitle="Add a child element dynamically" />
              <div className="flex items-center gap-3 mb-3">
                <Button className="bg-primary" onClick={addChild}>Add Child</Button>
                <span className="text-sm text-muted-foreground">Click to append a new child below</span>
              </div>
              <div className="border rounded-md p-4 space-y-2">
                {children.length === 0 ? (
                  <div className="text-sm text-muted-foreground">No children yet.</div>
                ) : (
                  children.map((c, idx) => (
                    <div key={idx} className="px-3 py-2 rounded-md bg-secondary/40">{c}</div>
                  ))
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniApps;
