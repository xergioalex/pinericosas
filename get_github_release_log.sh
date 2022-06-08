git log --pretty=oneline | sed 's/[^ ]* *//' > git_logs.txt

if [[ -f "git_logs_output.txt" ]]; then
  rm git_logs_output.txt
fi

while read text_line; do
  if [[ "$text_line" =~ "[🤖 DailyBot] New release to v" ]]; then
    break
  fi
  if [[ -f "git_logs_output.txt" ]]; then
    echo -n "\n" >> git_logs_output.txt
  fi
  if [[ ! "$text_line" =~ "Merge branch 'master'" ]]; then
    echo -n "🚩 $text_line" >> git_logs_output.txt
  fi
done < git_logs.txt
